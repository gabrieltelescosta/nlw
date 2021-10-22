const linksSocialMedia = {
    github: "gabrieltelescosta",
    youtube: "gabrieltelescr",
    facebook: "gabrieltelescr",
    twitter: "gabrieltelescr",
    instagram: "gabrieltelescr"
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    }
}


changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name,
                userBio.textContent = data.bio,
                userGit.href = data.html_url,
                userGitName.textContent = data.login,
                userPhoto.src = data.avatar_url
        })



}
getGitHubProfileInfos()