/**
 * .before(html)
 * 
 * Add child before all of the current nodes
 * @param String html to be inserted
 * @return this Umbrella object
 */
u.prototype.before = function(html) {
  
  return this.adjacent('beforebegin', html);
};
