# Attendance manager

As UTM students, we have encountered a serious problem regarding the collection of attendance data about students at courses.
Given the large number of people and how spread out they are in the classroom, it is nearly impossible to collect accurate attendance data.

This web application offers a solution to this problem.

## Usage

1. Start the server (preferably changing the port to something else, but running with `sudo` on linux, for it to work on port `80`)
2. Host a Wi-Fi network. (it doesn't have to provide internet data)
3. Have every student connect to it.
4. Let the students know the machine's IP adress.
5. Students enter the webpage, enter their own assigned code, and click submit.
6. The monitor can use `curl localhost:3000/absences` to get list of absent people.

## Note

Remember to route traffic via firewall, or disabling it.