
Just created the routes using router from express and , was not able to add the port from config folder so i had to hard code it to 3000

---
Just added MongoDB , the password with aplha numeric were not making connections , had to shift to string based passwords and magic it made a connection (stack overflow helped)

```
 7uwse2DD -❌
 hinanna ✔️
```

----

JWT tokens are set and the authentication code has been written , the data is getting stored in db when hit on sign-up route ,and sign-in route is working well

*Make sure to have better maxlen mentioned for fields*

---

We tried adding authorixations , which makes the sign-in user only to get the response for the request made about the user info. No token no food(details)

----

Made 2 subscription related routes working via controllers
Added the qstash and nodemailer for email automations 