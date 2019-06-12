import Database from 'nedb-promises'
import path from 'path'
import { remote } from 'electron'

const createDatabase = filename => Database.create(
  path.join(remote.app.getPath('userData'), '/' + filename + '.db')
)

export default {
  asanas: createDatabase('asanas'),
  cycles: createDatabase('cycles'),
  options: createDatabase('options')
}