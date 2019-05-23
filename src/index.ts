import api from "./api";
// use this line to get port from environment variable
const PORT = process.env.PORT || 3000;
api.listen(PORT, () => {      
      console.log("listening on port " + PORT);
});



