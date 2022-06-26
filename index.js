/* 
    Challenge
    
    Using the body tag as a Flexbox container
        re-create the provided layout
    
    Hint: The Header and Footer are each 10% 
        of the container's height
*/

function getUserDiv(user) {
    return `<div class="my-online-user" id="${user.username}">
                <div class="user-username">${user.username}</div>
                <div class="user-online"></div>
            </div>
            `
}
   

async function getUsers() {
    let response = await fetch("users.json")
    let users = await response.json()

    document.querySelector(".my-online-users").innerHTML = `
        ${users.map(user => getUserDiv(user)).join('')}
    `
    users.map(user => {
        document.getElementById(user.username).addEventListener("click", () => {
            document.querySelector(".main-content").innerHTML = `
            <div class="user-profile">
            <div class="user-profile-header">
                <div>${user.name}</div>
                <div>@${user.username}</div>
            </div>
            
            <div class="user-profile-company">
                <div>Company: ${user.company.name}</div>
                <div>${user.company.catchPhrase}</div>
                <div>${user.company.bs}</div>
            </div>
            
            <div class="user-profile-contact">
                <div>📧${user.email}</div>
                <div>📞${user.phone}</div>
                <div>💻${user.website}</div>
            </div>
            
            <div class="user-profile-address">
                <div>${user.address.street}, ${user.address.suite}</div>
                <div>${user.address.city} ${user.address.zipcode}</div>
            </div>
        </div>`
        })
    })


}


getUsers()




