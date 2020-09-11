$(document).ready(function () {
    checkLogin();
});

function checkLogin(){
    
    var promptCount = 0;
            window.pw_prompt = function (options) {
                var lm = options.lm || "",
                    um = options.um || "",
                    bm = options.bm || "Submit";
                if (!options.callback) {
                    //alert("No callback function provided! Please provide one.")
                };

                var prompt = document.createElement("div");
                prompt.className = "pw_prompt";

                var submit = function () {
                    options.callback(input_user.value,input.value);
                    document.body.removeChild(prompt);
                };

                var label = document.createElement("label");
                label.textContent = lm;
                var label_user = document.createElement("label");
                label_user.id = 'userID'
                label_user.textContent = um;
                label_user.for = "pw_prompt_input" + (2+promptCount);
                prompt.appendChild(label_user);
                label.for = "pw_prompt_input" + (++promptCount);
                prompt.appendChild(label);

                label = document.createElement("label");
                label.textContent = 'User ID';
                prompt.appendChild(label);

                var input_user = document.createElement("input");
                input_user.id = "pw_prompt_input" + (2+promptCount);
                prompt.appendChild(input_user);

                label = document.createElement("label");
                label.textContent = 'Password';
                prompt.appendChild(label);

                var input = document.createElement("input");
                input.id = "pw_prompt_input" + (promptCount);
                input.type = "password";
                input.addEventListener("keyup", function (e) {
                    if (e.keyCode == 13) submit();
                }, false);
                prompt.appendChild(input);

                var button = document.createElement("button");
                button.textContent = bm;
                button.addEventListener("click", submit, false);
                prompt.appendChild(button);

                document.body.appendChild(prompt);

            };

            pw_prompt({
                um: "Enter User ID & Password:",
                callback: function (user_ID, password) {
                     if(user_ID=='admin' & password=='123'){
                        window.location.replace("main.html");
                            
                     }
                     else{
                         alert('Pleaser Enter Correct User_ID and Password')
                         checkLogin()
                     }
                }  
            });

}