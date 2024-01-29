## Loops Exercise

    To run the promtable solution uncomment the respective file script from this html fle

[HTML File](./loops.html)

1.  Create a program that outputs all odd, positive numbers less than 100, starting from 1, such as 1, 3, 5, 7, 9, 11, and so on.

```mermaid

graph TD
  A[Start] --> B(Initialize i to 1)
  B --> C{ i <= 100 }
  C -- No --> D[End Program]
  C -- Yes --> E{ i is odd }
  E -- No --> F[Increment i by 1] --> C
  E -- Yes --> G[Output i] --> H[Increment i by 2] --> C


```

2.  Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.

```mermaid
graph TD;
  A[Start] -->|Initialize str to empty| B(Initialize num to 2);
  B -->|num < 100| C{Append num to str};
  C -- Yes --> D[Append space to str] --> E[Increment num by 2] --> B;
  C -- No --> F[Output str];
```

3.  Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

- solution 1.0.0

```mermaid

    graph TD;
  A[Start] --> B(Initialize while loop)
  B --> C{true}
  C -- Yes --> D[Prompt for distance]
  D --> E[Parse distance]
  E -->|Distance == 0| F[Break the loop]
  E -- No --> G[Prompt for time]
  G --> H[Parse time]
  H --> I[Calculate average speed]
  I --> J[Output average speed]
  J --> B
  F --> K[End Program]
```

##

- solution 1.0.1

```mermaid
graph TD;
  A[Start] --> B(Initialize while loop)
  B --> C{true}
  C -- Yes --> D[Prompt for distance]
  D --> E[Parse distance]
  E -->|!distance| F[Break the loop]
  E -- Yes --> G[Prompt for time]
  G --> H[Parse time]
  H -->|yes|I[Calculate and Output average speed]
  I --> J[Go back to the start of the loop]
  H -->|no| K[Output: Invalid input message]
  K --> J
  F --> L[End Program]


```

##

- solution 1.0.2

```mermaid
graph TD;
  A[Start] --> B(Initialize while loop)
  B --> C{true}
  C -- Yes --> D[Call getNumericInput with distance prompt]
  D --> E[Parse distance]
  E -->|user input is NaN| D[Call getNumericInput with distance prompt]
  E -- |user input is not NaN| --> G{distance === 0}
  G -- Yes --> H[Alert and Exit Program]
  H --> I[Console Log Program Exited] --> J[Break the loop]
  G -- No --> K[Call getNumericInput with time prompt]
  K --> L[Parse time]
  L -->|user input is NaN| M[Repeat K]
  L -- No --> N{time !== 0}
  N -- Yes --> O[Call calculateSpeed with distance and time]
  O --> B
  N -- No --> B



```

##

-

```mermaid
graph TD;
  A[Start] --> B(Initialize evenNum to 0)
  B --> C(Initialize index to 1)
  C -->|index <= 20| D[Prompt user for number]
  D --> E[Parse userInput]
  E -->|userInput is a valid number| F{userInput % 2 === 0}
  F -- Yes --> G[Increment evenNum]
  F -- No --> H[Continue to next iteration]
  H --> I[Increment index]
  I --> C
  C -->|index > 20| J[Output Number of even numbers: evenNum]
  J --> K[End Program]
  E -->|userInput is not a valid number| L[Output Invalid input and repeat current iteration]
  L --> C
```

##

4. Develop a program that requests the user to input 20 numbers. After all numbers are entered, the program should display how many of these numbers are even.

-

```mermaid

graph TD;
  A[Start] --> B(Initialize evenNum to 0)
  B --> C(Initialize i to 1)
  C -->|i <= 20| D[Prompt user for number i]
  D --> E[Parse userInput]
  E -->|user input is NaN| F[Output: Invalid input and repeat current iteration]
  E -- No --> G{userInput % 2 === 0}
  G -- Yes --> H[Increment evenNum]
  G -- No --> I[Continue to next iteration]
  I --> J[Increment i]
  J --> C
  C -->|i > 20| K[Output Number of even numbers: evenNum]
  K --> L[End Program]
  F --> C
```

##

5.  Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

```mermaid
graph TD;
  A[Start] --> B(Initialize count to 0)
  B --> C(Initialize sum to 0)
  C --> D(Initialize while loop)
  D --> E{true}
  E -- Yes --> F[Prompt user for a number]
  F --> G[Parse userInput]
  G -->|userInput is 0| H[Break the loop]
  G -->|userInput is not 0| I[Increment count]
  I --> J[Add userInput to sum]
  J --> D
  H --> K[Calculate and Output the average sum / count]
  K --> L[End Program]
```

##

6.  Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

-

```mermaid
graph TD;
  A[Start] --> B(Initialize sum to 0)
  B --> C(Initialize count to 0)
  C --> D(Initialize while loop)
  D --> E[Prompt user for a single number]
  E --> F[Increment count]
  F --> G[Parse userInput]
  G -->|userInput is not a valid number| H[Output error message]
  H --> D
  G -->|userInput is a valid number| I[Add parsedNumber to sum]
  I --> J[Ask user if they want to continue y/n]
  J -->|userChoice is 'y'| D
  J -->|userChoice is 'n'| K[Calculate and Output the average sum / count] --> L[End Program]
  K --> L
```

##

7.  Not assigned

8.  Develop a program that initially asks the user how many numbers they wish to input. After receiving this information, the program should then prompt the user to enter each of these numbers. Once all numbers have been entered, the program should determine and display the smallest and biggest number provided by the user.

- For loops

```mermaid
graph TD;
  A[Start] --> B[Prompt user for inputCount]
  B --> C(Initialize smallest and biggest)
  C --> D(Initialize numbers array)
  D --> E(Initialize For loop)
  E -->|i < inputCount| F[Prompt user for number i]
  F --> G[Parse userInput]
  G --> H[Add userInput to numbers array]
  H --> I[Increment i]
  I --> E
  E -->|i >= inputCount| J[Calculate smallest and biggest]
  J --> K[Display smallest and biggest]
  K --> L[End Program]
```

##

- With while loop

```mermaid

graph TD;
  A[Start] --> B[Prompt user for inputCount]
  B --> C(Initialize smallest and biggest)
  C --> D(Initialize numbers array)
  D --> E(Initialize i to 1)
  E --> F(While loop condition: i <= inputCount)
  F -->|true| G[Prompt user for number i]
  G --> H[Parse userInput]
  H --> I[Add userInput to numbers array]
  I --> J[Increment i]
  J --> F
  F -->|false| K[Calculate smallest and biggest]
  K --> L[Display smallest and biggest]
  L --> M[End Program]

```


# EOP
