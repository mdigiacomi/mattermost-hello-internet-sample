#!/bin/bash
docker run --name mattermost-dev -d --publish 8065:80 mattermost/platform
