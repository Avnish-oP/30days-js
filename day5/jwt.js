import Express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = Express();
app.use(cors());
app.use(cookieParser());
app.use(Express.json());

app.post("/login", (req, res) => {
    const email= req.body.email;
  const user = req.body;
  console.log(user);
  jwt.sign({ user: user }, "secretkey",{expiresIn:60*5}, (err, token) => {
    res.cookie("token", token, { httpOnly: true }).json({
      success: true,
      token: token,
    });
  });
});

app.get("/jwtinfo", (req, res) => {
  jwt.verify(req.cookies.token, "secretkey", (err, authData) => {
    if (err) {
      res.json({
        message: "You need to login",
      });
    } else {
        console.log(authData);
        if(authData.iat + 60 < Date.now()/1000){
      res.json({
        message: "Welcome to the secure route",
        authData,
        
      });
    }
    else{
        res.json({
            message: "Token Expired",
          });
    }
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
