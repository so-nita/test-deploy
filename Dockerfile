FROM ubuntu:latest
LABEL authors="sonit"

ENTRYPOINT ["top", "-b"]