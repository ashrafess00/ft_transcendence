


COMMIT_MSG=$1
BRANCH='ash'

git add .

if [ $COMMIT_MSG ]; then
    git commit -m $COMMIT_MSG
else
    git commit --amend --no-edit
fi

git push -f origin $BRANCH