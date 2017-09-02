import { Factory } from 'rosie'
import faker from 'faker'

const yearGenerator = () => faker.random.number({ min: 2010, max: 2017 })

export const book = new Factory()
  .sequence('id')
  .attr('title', () => faker.name.findName())
  .attr('year', yearGenerator)
  .attr('stars', () => faker.random.number({ min: 1, max: 5 }))
  .attr('category', () => faker.random.arrayElement(['sociology', 'software', 'econ', 'history', 'other']))

export const year = new Factory()
  .attr('year', yearGenerator)
  .attr('count', () => faker.random.number({ min: 1, max: 20 }))

export const login = new Factory()
  .attr('user', () => faker.internet.userName())
  .attr('password', () => faker.internet.password())
