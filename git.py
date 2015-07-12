from subprocess import call
call(["git", "add", "*"])
comment = raw_input("Enter commit comment:")
call(["git", "commit", "-m", comment])
call(["git", "push", "origin", "master"])
