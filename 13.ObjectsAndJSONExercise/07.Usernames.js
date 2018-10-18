function usernames(input) {
    let usernames = new Set();

    for (const username of input) {
        usernames.add(username);
    }

    usernames = Array.from(usernames).sort((u1, u2) => {
        let diff = u1.length - u2.length;

        if(diff === 0) {
            return u1.localeCompare(u2);
        }

        return diff;
    });

    console.log(usernames.join("\n"));
}

usernames([
'Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston']
);