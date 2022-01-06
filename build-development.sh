#!/bin/sh

export REACT_APP_CONTENT_URL=https://content.phoenix.newdev.virtualoutbound.com/
export REACT_APP_user_pool=<get a secret key from somewhere using a CLI>

yarn run build
