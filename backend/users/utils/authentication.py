from django.utils import timezone
from django.utils.translation import gettext as _
from rest_framework.authentication import TokenAuthentication
from rest_framework.exceptions import AuthenticationFailed

from ..models import Token


class CustomTokenAuthentication(TokenAuthentication):
    def authenticate_credentials(self, key):
        token = Token.objects.select_related('user').filter(key=key, expires_at__gte=timezone.now()).first()

        if token is None:
            raise AuthenticationFailed(_('Invalid or expired token.'))

        if not token.user.is_active:
            raise AuthenticationFailed(_('User inactive or deleted.'))

        if not token.is_active:
            raise AuthenticationFailed(_('Your token is not active.'))

        return token.user, token
