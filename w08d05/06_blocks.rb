# blocks = chunk of code denoted by do..end
# proc = a block stored in memory
# lambda = special type of proc that cares about how many args get passed to it

dogs = ['Dioji', 'Oliver', 'Roo']

my_proc = lambda do |dog, index|
  puts "#{dog} wants a walk"
end

dogs.each_with_index &my_proc

users = ['alice', 'bob', 'carol']

users.each &my_proc
