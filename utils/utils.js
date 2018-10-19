import moment from 'moment'

function dateToString (date) {
  if (date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
  }
  return ''
}
/* function reverse (parameters) {
  let array = parameters.array
  array.slice().reverse()
} */
/* function reverse (vec) {
  vec.slice.reverse()
} */

/* function reverse (niz) {
  niz.slice().reverse()
} */
/*
function reverse (array) {
  array.toArray().slice().reverse()
}
*/
function reverse (array) {
  console.log('reverse called only once per new, not X ever increasing num of messages')
  return array.slice().reverse()
}
// ... in the end of the file
export { dateToString, reverse }
// export { dateToString }
