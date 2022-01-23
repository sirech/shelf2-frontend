// eslint-disable-next-line import/named
import { Factory } from 'rosie'

const yearGenerator = () => 2015

export const book = new Factory()
  .sequence('id')
  .attr('title', () => 'Book')
  .attr('year', yearGenerator)
  .attr('stars', () => 3)
  .attr('category', () => 'software')

export const year = new Factory()
  .attr('year', yearGenerator)
  .attr('count', () => 5)

export const login = new Factory()
  .attr('user', () => 'user')
  .attr('password', () => 'password')
