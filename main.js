const linksSocialMedia = {
    github: "gabrieltelescr",
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

function changeGithubLink() {
    userGit.href = `https://github.com/${linksSocialMedia.github}`
}
changeGithubLink()
changeSocialMediaLinks()