class EventEmmiter {
  map = {}

  on = (name, handler) => (this.map[name] = [...(this.map[name] || []), handler])

  off = (name, handler) => (this.map[name] = this.map[name].filter((v) => v !== handler))

  emit = (name, ...args) => (Array.isArray(this.map[name]) ? this.map[name].forEach((handler) => handler(...args)) : null)
}
