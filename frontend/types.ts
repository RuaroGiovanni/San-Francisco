export type EventType = 'default' | 'highlight' | 'meal' | 'flight' | 'event';
export type BadgeVariant = 'lunch' | 'dinner' | 'flight' | 'event';

export interface Badge {
  label: string;
  variant: BadgeVariant;
}

export interface TripEvent {
  time: string;
  type: EventType;
  name: string;
  desc: string;
  badge?: Badge;
  location?: string;
}

export interface DayTheme {
  icon: string;
  text: string;
}

export interface DayNote {
  icon: string;
  text: string;
}

export interface DayData {
  id: number;
  date: string;
  weekday: string;
  theme: DayTheme;
  chipLabel: string;
  chipNum: string;
  note?: DayNote;
  events: TripEvent[];
}
