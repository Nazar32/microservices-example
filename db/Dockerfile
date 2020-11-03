FROM node:current-alpine

RUN apk add --no-cache 'su-exec>=0.2'
RUN apk add --no-cache bash

ENV INSTALL_DIR /opt/app

ENV PORT "$PORT"

WORKDIR $INSTALL_DIR

COPY . $INSTALL_DIR
RUN set -eux; \
	chown node:node "$INSTALL_DIR"; \
	cd "$INSTALL_DIR"; \
	su-exec node yarn; \
	su-exec node yarn run build; \
	su-exec node yarn cache clean --force;

EXPOSE $PORT

CMD ["node", "dist/main.js"]
