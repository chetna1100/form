const inputVtitle = document.getElementById('vtitle')
const displayVacancy = document.getElementsByClassName('displayVacancy')
function displayValue() {
 displayVacancy[0].innerHTML = inputVtitle.value
}
  inputVtitle.addEventListener('keyup', displayValue)

  const getBtn = document.getElementById("mySelect");

  const getData = () => {
    fetch("https://demo9419531.mockable.io/pz_data")
      .then(
        (response) => response.json())
      .then((jsonResponse) => {
          
          document.getElementById("roleDetail").innerHTML = `
      <label for="vtitle">Role</label>
          <input
            type="text"
            id="vtitle"
            name="vacancyTitle"
            placeholder="Hr Manager"
          />
          <p><label for="profile">Profile</label>
          </p>
          <textarea id="profileText" name="profileText" rows="4" cols="50"></textarea
          >
  <br>
          <input type="checkbox" id="tenderIn" name="tender" value="true" />
          <label for="tender">Tender</label>`;
        //console.log(jsonResponse);
        //document.getElementById("display");
      })
      .catch(() => console.log(`Request failed!`));
  };
  
  getBtn.addEventListener("click", getData);