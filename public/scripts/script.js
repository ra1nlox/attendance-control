window.onload = init;

function init(){
  const submit_button = document.getElementById("submit")
  const user_id_field = document.getElementById("user_id")
  const status_label = document.getElementById("status")

  submit_button.onclick = async () => {
    let response = await fetch("/clock_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({user_id: user_id_field.value})
    })
    status_label.setAttribute("style", "display: block")
    const result = await response.json()
    status_label.innerHTML = result.msg 
  }
}