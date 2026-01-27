# Debouncing:

- Typing Slow = 200ms
- Typing Fast = 30ms

# Performance:

- iphone pro max = 14 letters \* 1000 = 14,000 API calls
- with debouncing = 3 API calls \* 1000 = 3000 API calls

- Debouncing with 200ms
- If difference between 2 key strokes is < 200ms - decline the API call
- > 200ms make an API call and show the results

- Cache: [
  i, ip, iph, ipho, iphon, iphone
  ]

{
i:
ip:
iph:
ipho:
iphone:
}

time complexity to search in array = O(n)
time complexity to search in an Object(hash map) = O(1)

new Map(); is more optimized than searching in an object

array.indexOf() O(n)
