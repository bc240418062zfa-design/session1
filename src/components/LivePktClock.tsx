import React, { useState, useEffect } from 'react';
import { Clock, Radio, PlayCircle, PauseCircle, FastForward } from 'lucide-react';

interface LivePktClockProps {
  className?: string;
  isCompact?: boolean;
}

export const LivePktClock: React.FC<LivePktClockProps> = ({
  className = '',
  isCompact = false,
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isSimulatedLive, setIsSimulatedLive] = useState<boolean>(false);
  const [simulatedSeconds, setSimulatedSeconds] = useState<number>(850); // e.g. 14 mins into class

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
      if (isSimulatedLive) {
        setSimulatedSeconds((prev) => (prev + 1) % 3600);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [isSimulatedLive]);

  // Format Pakistan Time (Asia/Karachi, UTC+5)
  const pktFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Karachi',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const pktDateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Karachi',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const formattedPktTime = pktFormatter.format(currentDate);
  const formattedPktDate = pktDateFormatter.format(currentDate);

  // Compute live elapsed or countdown relative to 9:30 PM PKT (21:30 PKT)
  // Get current hour and minute in PKT
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Karachi',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(currentDate);

  const hour = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
  const minute = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);
  const second = parseInt(parts.find((p) => p.type === 'second')?.value || '0', 10);

  const currentSecondsInDay = hour * 3600 + minute * 60 + second;
  const sessionStartSeconds = 21 * 3600 + 30 * 60; // 21:30 PKT
  const sessionEndSeconds = 22 * 3600 + 30 * 60;   // 22:30 PKT

  const isActuallyLive = currentSecondsInDay >= sessionStartSeconds && currentSecondsInDay <= sessionEndSeconds;
  const isPostSession = currentSecondsInDay > sessionEndSeconds;

  let sessionStatusLabel = '';
  let elapsedMinutes = 0;
  let elapsedSeconds = 0;

  if (isSimulatedLive) {
    elapsedMinutes = Math.floor(simulatedSeconds / 60);
    elapsedSeconds = simulatedSeconds % 60;
    sessionStatusLabel = `LIVE IN-CLASS: +${elapsedMinutes}m ${elapsedSeconds.toString().padStart(2, '0')}s in Session`;
  } else if (isActuallyLive) {
    const elapsed = currentSecondsInDay - sessionStartSeconds;
    elapsedMinutes = Math.floor(elapsed / 60);
    elapsedSeconds = elapsed % 60;
    sessionStatusLabel = `LIVE IN-CLASS: +${elapsedMinutes}m ${elapsedSeconds.toString().padStart(2, '0')}s in Session`;
  } else if (!isPostSession) {
    const diff = sessionStartSeconds - currentSecondsInDay;
    const h = Math.floor(diff / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;
    sessionStatusLabel = `Starts in ${h}h ${m}m ${s}s (at 09:30 PM PKT)`;
  } else {
    sessionStatusLabel = `Today's Live Class Completed · Archive Review Active`;
  }

  if (isCompact) {
    return (
      <div className={`flex items-center gap-1.5 text-xs font-mono shrink-0 ${className}`}>
        <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-200 whitespace-nowrap">
          <Clock className="w-3.5 h-3.5 text-emerald-400" />
          <span className="font-bold text-white">{formattedPktTime}</span>
          <span className="text-[10px] text-emerald-400 font-semibold">PKT</span>
        </div>
        <div
          className={`hidden 2xl:flex items-center gap-1.5 px-2 py-1 rounded text-[11px] font-semibold whitespace-nowrap ${
            isActuallyLive || isSimulatedLive
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse'
              : 'bg-slate-900 border border-slate-800 text-slate-300'
          }`}
          title={sessionStatusLabel}
        >
          <Radio className="w-3 h-3 text-rose-400" />
          <span>{sessionStatusLabel}</span>
        </div>
        <div
          className={`hidden xl:flex 2xl:hidden items-center gap-1 px-1.5 py-1 rounded text-[10px] font-semibold whitespace-nowrap ${
            isActuallyLive || isSimulatedLive
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse'
              : 'bg-slate-900 border border-slate-800 text-slate-300'
          }`}
          title={sessionStatusLabel}
        >
          <Radio className="w-2.5 h-2.5 text-rose-400" />
          <span>{isActuallyLive || isSimulatedLive ? 'LIVE' : '9:30 PM PKT'}</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-slate-950 border border-slate-800 rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md ${className}`}
    >
      {/* Live PKT Time Display */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
          <Clock className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 truncate">
            <span>PAKISTAN STANDARD TIME (PKT)</span>
            <span>·</span>
            <span>{formattedPktDate}</span>
          </div>
          <div className="flex items-baseline gap-2 font-mono flex-wrap">
            <span className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              {formattedPktTime}
            </span>
            <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
              UTC+5 (Asia/Karachi)
            </span>
          </div>
        </div>
      </div>

      {/* Live Class Schedule Status & Elapsed Time */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-end gap-2.5 sm:gap-3 w-full sm:w-auto pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-850">
        <div className="text-left sm:text-right">
          <div className="text-[10px] sm:text-[11px] font-mono text-slate-400">
            OFFICIAL CLASS SCHEDULE: 09:30 PM PKT
          </div>
          <div
            className={`text-xs font-mono font-bold flex items-center gap-1.5 justify-start sm:justify-end ${
              isActuallyLive || isSimulatedLive
                ? 'text-rose-400 animate-pulse'
                : 'text-blue-400'
            }`}
          >
            <Radio className="w-3.5 h-3.5 shrink-0" />
            <span>{sessionStatusLabel}</span>
          </div>
        </div>

        {/* Quick Simulation Toggle */}
        <button
          onClick={() => setIsSimulatedLive(!isSimulatedLive)}
          className={`px-2.5 py-1 rounded text-[11px] font-mono font-semibold border transition-colors shrink-0 ${
            isSimulatedLive
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/50'
              : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border-slate-800 hover:text-slate-200'
          }`}
          title="Toggle Simulation of In-Progress 9:35 PM PKT Live Class"
        >
          {isSimulatedLive ? 'Reset Clock' : 'Simulate Live'}
        </button>
      </div>
    </div>
  );
};
