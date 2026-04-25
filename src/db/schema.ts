import {
  mysqlTable,
  int,
  varchar,
  text,
  timestamp,
  index,
  datetime,
} from 'drizzle-orm/mysql-core'
import { sql } from 'drizzle-orm'

// 1. Kelompoks — kelompok besar
export const kelompoks = mysqlTable('kelompoks', {
  id: int('id').primaryKey().autoincrement().notNull(),
  nama: varchar('nama', { length: 45 }),
})

// 2. Subkelompoks — sub-kelompok, FK ke kelompoks
export const subkelompoks = mysqlTable(
  'subkelompoks',
  {
    id: int('id').primaryKey().autoincrement().notNull(),
    kelompoksId: int('kelompoks_id')
      .notNull()
      .references(() => kelompoks.id),
  },
  (table) => ({
    kelompoksIdx: index('fk_subkelompoks_kelompoks1_idx').on(table.kelompoksId),
  })
)

// 3. Levels — level/stage dalam game
export const levels = mysqlTable('levels', {
  id: int('id').primaryKey().autoincrement().notNull(),
  nama: varchar('nama', { length: 45 }),
  deskripsi: text('deskripsi'),
})

// 4. Gamesessions — sesi pertandingan antar 2 kelompok
export const gamesessions = mysqlTable(
  'gamesessions',
  {
    id: int('id').primaryKey().autoincrement().notNull(),
    waktuMulai: datetime('waktu_mulai', { mode: 'string' }),
    waktuSelesai: datetime('waktu_selesai', { mode: 'string' }),
    kelompoksId1: int('kelompoks_id_1')
      .notNull()
      .references(() => kelompoks.id),
    kelompoksId2: int('kelompoks_id_2')
      .notNull()
      .references(() => kelompoks.id),
    kelompoksIdMenang: int('kelompoks_id_menang')
      .notNull()
      .references(() => kelompoks.id),
  },
  (table) => ({
    kelompoks1Idx: index('fk_gamesessions_kelompoks1_idx').on(
      table.kelompoksId1
    ),
    kelompoks2Idx: index('fk_gamesessions_kelompoks2_idx').on(
      table.kelompoksId2
    ),
    kelompoks3Idx: index('fk_gamesessions_kelompoks3_idx').on(
      table.kelompoksIdMenang
    ),
  })
)

// 5. Levelresults — hasil per level dalam satu sesi
export const levelresults = mysqlTable(
  'levelresults',
  {
    id: int('id').primaryKey().autoincrement().notNull(),
    gamesessionsId: int('gamesessions_id')
      .notNull()
      .references(() => gamesessions.id),
    levelsId: int('levels_id')
      .notNull()
      .references(() => levels.id),
    subkelompoksId1: int('subkelompoks_id_1')
      .notNull()
      .references(() => subkelompoks.id),
    subkelompoksId2: int('subkelompoks_id_2')
      .notNull()
      .references(() => subkelompoks.id),
    subkelompoksIdMenang: int('subkelompoks_id_menang')
      .notNull()
      .references(() => subkelompoks.id),
  },
  (table) => ({
    gamesessionsIdx: index('fk_levelresults_gamesessions1_idx').on(
      table.gamesessionsId
    ),
    levelsIdx: index('fk_levelresults_levels1_idx').on(table.levelsId),
    subkelompoks1Idx: index('fk_levelresults_subkelompoks1_idx').on(
      table.subkelompoksId1
    ),
    subkelompoks2Idx: index('fk_levelresults_subkelompoks2_idx').on(
      table.subkelompoksId2
    ),
    subkelompoks3Idx: index('fk_levelresults_subkelompoks3_idx').on(
      table.subkelompoksIdMenang
    ),
  })
)

// 6. Anggotas — anggota/peserta per kelompok
// PK = nrp (NRP mahasiswa), bukan auto-increment
export const anggotas = mysqlTable(
  'anggotas',
  {
    nrp: int('nrp').primaryKey().notNull(),
    nama: varchar('nama', { length: 45 }),
    kelompoksId: int('kelompoks_id')
      .notNull()
      .references(() => kelompoks.id),
  },
  (table) => ({
    kelompoksIdx: index('fk_anggotas_kelompoks_idx').on(table.kelompoksId),
  })
)
