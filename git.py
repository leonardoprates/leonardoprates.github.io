from subprocess import call
call(["git", "add", "*"])
call(["git", "commit", "-m", "'Update'"])
call(["git", "push", "origin", "master"])