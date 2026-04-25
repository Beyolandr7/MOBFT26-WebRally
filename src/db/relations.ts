import { relations } from 'drizzle-orm'
import {
  kelompoks,
  subkelompoks,
  gamesessions,
  levelresults,
  levels,
  anggotas,
} from './schema'

export const kelompoksRelations = relations(kelompoks, ({ many }) => ({
  subkelompoks: many(subkelompoks),
  anggotas: many(anggotas),
  sessionsAsTim1: many(gamesessions, { relationName: 'tim1' }),
  sessionsAsTim2: many(gamesessions, { relationName: 'tim2' }),
  sessionsAsWinner: many(gamesessions, { relationName: 'pemenang' }),
}))

export const subkelompoksRelations = relations(
  subkelompoks,
  ({ one, many }) => ({
    kelompok: one(kelompoks, {
      fields: [subkelompoks.kelompoksId],
      references: [kelompoks.id],
    }),
    resultsAsTim1: many(levelresults, { relationName: 'subTim1' }),
    resultsAsTim2: many(levelresults, { relationName: 'subTim2' }),
    resultsAsWinner: many(levelresults, { relationName: 'subPemenang' }),
  })
)

export const levelsRelations = relations(levels, ({ many }) => ({
  levelresults: many(levelresults),
}))

export const gamesessionsRelations = relations(
  gamesessions,
  ({ one, many }) => ({
    tim1: one(kelompoks, {
      fields: [gamesessions.kelompoksId1],
      references: [kelompoks.id],
      relationName: 'tim1',
    }),
    tim2: one(kelompoks, {
      fields: [gamesessions.kelompoksId2],
      references: [kelompoks.id],
      relationName: 'tim2',
    }),
    pemenang: one(kelompoks, {
      fields: [gamesessions.kelompoksIdMenang],
      references: [kelompoks.id],
      relationName: 'pemenang',
    }),
    levelresults: many(levelresults),
  })
)

export const levelresultsRelations = relations(levelresults, ({ one }) => ({
  gamesession: one(gamesessions, {
    fields: [levelresults.gamesessionsId],
    references: [gamesessions.id],
  }),
  level: one(levels, {
    fields: [levelresults.levelsId],
    references: [levels.id],
  }),
  subTim1: one(subkelompoks, {
    fields: [levelresults.subkelompoksId1],
    references: [subkelompoks.id],
    relationName: 'subTim1',
  }),
  subTim2: one(subkelompoks, {
    fields: [levelresults.subkelompoksId2],
    references: [subkelompoks.id],
    relationName: 'subTim2',
  }),
  subPemenang: one(subkelompoks, {
    fields: [levelresults.subkelompoksIdMenang],
    references: [subkelompoks.id],
    relationName: 'subPemenang',
  }),
}))

export const anggoatasRelations = relations(anggotas, ({ one }) => ({
  kelompok: one(kelompoks, {
    fields: [anggotas.kelompoksId],
    references: [kelompoks.id],
  }),
}))
