from rest_framework.serializers import Serializer


class BaseSerializer(Serializer):
    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass
