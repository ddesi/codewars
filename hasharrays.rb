# Complete the solution so that it takes an array of keys and a default value 
# and returns a hash with all keys set to the default value.

def solution(keys, default_value)
  keys.product([default_value]).to_h
end

# best practice

def solution(keys, default_value)
  Hash[keys.map {|key| [key, default_value]}]
end
