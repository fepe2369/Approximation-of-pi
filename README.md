Approximation of π using Monte Carlo Method
This project visually demonstrates the Monte Carlo method to approximate the value of π. By generating random points inside a square and observing how many fall within a circle inscribed in it, the program uses probability and geometry to converge on an approximation of this fundamental constant.

The application combines interactive graphics with simple math, making it ideal for educational purposes or as a fun way to explore the power of randomness in computing.

How It Works
The program draws a square with an inscribed circle. Random points are plotted within the square, and the ratio of points inside the circle to the total points approximates the ratio of their areas. Using this ratio, the value of π is calculated as:

π ≈ 4 x (Points inside circle/Total points)
​ 
The more points generated, the closer the approximation to π.

Features and Technologies
This project uses p5.js for graphics, along with HTML, CSS, and JavaScript. Bootstrap ensures a clean and responsive design. It’s a lightweight and easily modifiable program for experimenting with different sampling densities to see how the approximation evolves.

Why It Works
The Monte Carlo method leverages randomness to estimate numerical results. Here, it uses the geometric relationship between a square and an inscribed circle. The closer the ratio of points matches their theoretical areas, the closer the computed π gets to its true value.

Getting Started
Simply open the index.html file in a web browser to see the program in action. The number of points can be adjusted in the JavaScript file for more precise or faster approximations.

Thank you for passing by!! - Made by Felipe Pereira :3
