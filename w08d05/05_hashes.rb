# object, collection of key/value pairs, hash, associative array, dictionary

user = {
  'username' => 'jstamos',
  'password' => '1234'
}

# puts user['username']

# a symbol is a very lightweight object (think primitive)

user = {
  :username => 'jstamos',
  :password => '1234'
}

# key = 'password'

# p user[key.to_sym]

user = {
  username: 'jstamos',
  password: '1234'
}

p user
p user[:password]

