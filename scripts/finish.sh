curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"url":"${REPO}"}' \
  -G
  -d 'token=$token'
  https://welbi.org/api/finish