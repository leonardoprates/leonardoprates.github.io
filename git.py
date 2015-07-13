from subprocess import call

prompt = raw_input('Enter 0 for \'Update\' \nEnter 1 for a custom comment\n')

def git(choice):

  option = 'commit -m '

  if choice == '1':
      option += raw_input('Enter comment: ')
      print option, '\n'
  else:
      option += 'Update'
      print option, '\n'

  call(['git', 'add', '*'])
  call(['git', 'commit', '-m', option])
  call(['git', 'push', 'origin', 'master'])

git(prompt)