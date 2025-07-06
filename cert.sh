#!/bin/bash

# VULTR_API_KEY=""
CREDENTIALS_FILE=$HOME/vultr_credentials.ini
DOMAINS=nanpa.la,*.nanpa.la,*.anpa.nanpa.la,*.tan.anpa.nanpa.la,*.sitelen.tan.anpa.nanpa.la
EMAIL=dev@etbcor.com
# echo "dns_vultr_token = $VULTR_API_KEY" > $CREDENTIALS_FILE
# chmod 600 $CREDENTIALS_FILE
certbot certonly --domains $DOMAINS --email $EMAIL \
  --authenticator dns-vultr \
  --dns-vultr-credentials $CREDENTIALS_FILE \
  --dns-vultr-propagation-seconds 120
