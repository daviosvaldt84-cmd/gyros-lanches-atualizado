import { useEffect, useState } from 'react'
import business from '../data/business'

const weekdayMap = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
}

function getLocalParts() {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: business.hours.timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  })

  const parts = Object.fromEntries(formatter.formatToParts(new Date()).map((part) => [part.type, part.value]))
  return {
    weekday: weekdayMap[parts.weekday],
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  }
}

function getStatus() {
  const { weekday, minutes } = getLocalParts()
  const openDays = business.hours.openWeekdays
  const [openHour, openMinute] = business.hours.opensAt.split(':').map(Number)
  const opensAtMinutes = openHour * 60 + openMinute
  const isOpenDay = openDays.includes(weekday)
  const open = isOpenDay && minutes >= opensAtMinutes

  if (open) return { open: true, label: 'Aberto agora · fecha à 00h' }
  if (!isOpenDay) return { open: false, label: 'Fechado hoje' }
  return { open: false, label: 'Fechado agora · abre às 18h' }
}

export default function OpeningHours() {
  const [status, setStatus] = useState(getStatus())

  useEffect(() => {
    const id = setInterval(() => setStatus(getStatus()), 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="brand-card rounded-2xl border border-night-line p-6">
      <p className="font-display text-sm text-cream">⏰ Horário de funcionamento</p>
      <p className="mt-2 font-body text-sm text-smoke">
        {business.hours.daysLabel}: das 18h às 00h
      </p>
      <p className="mt-1 font-body text-xs text-smoke/75">{business.hours.closedLabel}</p>
      <div className={`mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs font-bold ${status.open ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'}`}>
        <span className={`h-2 w-2 rounded-full ${status.open ? 'bg-green-400' : 'bg-red-400'}`} />
        {status.label}
      </div>
    </div>
  )
}
