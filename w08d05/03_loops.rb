i = 0

# loop do
#   i += 1
#   puts "hello #{i}"

#   break if i > 10
# end

# while i < 10 do
#   i += 1
#   puts "hello #{i}"
# end

# until i >= 10 do
#   i += 1
#   puts "hello #{i}"
# end

dogs = ['Dioji', 'Oliver', 'Roo']

# for..in === for..of
# for dog in dogs do
#   puts "#{dog} wants a walk"
# end

# block === do..end

# dogs.each_with_index do |dog, index|
#   puts "#{dog} wants a walk #{index}"
# end

# filter === select

# selected_dogs = dogs.select do |dog|
#   dog[0] == 'R'
# end

# p selected_dogs

# first, second = dogs
# p first

1000.times do |num|
  puts "hello #{num}"
end
