import { Factory } from 'rosie'
import faker from 'faker'

export const book = new Factory()
  .sequence('id')
  .attr('title', () => faker.name.findName())
  .attr('year', () => faker.random.number({ min: 2010, max: 2017 }))
  .attr('stars', () => faker.random.number({ min: 1, max: 5 }))
  .attr('category', () => faker.random.arrayElement(['sociology', 'software', 'econ', 'history', 'other']))
