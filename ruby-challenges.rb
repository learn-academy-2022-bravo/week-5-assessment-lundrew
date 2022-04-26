# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN





# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# #Pseudo Code
# create a method named "specific"
# input a parameter named "array" and "letter"
# use the select() method on the "array" parameter to access each element
# create an anonymous function with a parameter named "value"
# use the include?() method on the "letter" parameter to verify that letter value is included in our "array" parameter


def specific(array, letter) 
    array.select do |value| 
        value.include?(letter)
    end
end

p specific(beverages_array, letter_o)
p specific(beverages_array, letter_t)














# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100


#Pseudo Code
# create a method named "add"
# input a parameter named "array"
# use the sum() method to add each element of the array together


def add(array)
    array.sum()
end

p add nums_array1
p add nums_array2



















# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike 
    attr_accessor :model, :wheels, :current_speed
    
    def initialize(model, wheels = 2, current_speed = 0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end

    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is going #{current_speed} mph."
    end
    
    def pedal_fast(num1)
        @current_speed += num1
    end
    
    def brake(num2)
        if @current_speed - num2 <=0
        @current_speed =0
        else
            @current_speed -= num2
    end
  end
end

bike = Bike.new('Santa Cruz', 2)
p bike.bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0


p bike.pedal_fast(10) 
p bike.pedal_fast(18) 
p bike.brake(5) 
p bike.brake(25)
