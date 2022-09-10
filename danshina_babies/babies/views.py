from django.http import Http404, HttpResponseServerError
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Baby
from .serializers import BabySerializer

from loguru import logger


class BabyDetail(APIView):
    @staticmethod
    def get_object(baby_id):
        try:
            return Baby.objects.get(id=baby_id)
        except Exception as e:
            logger.error(e)
            raise Http404

    def get(self, request, baby_id, format=None):
        if baby_id:
            result = self.get_object(baby_id)
            if not result:
                raise Http404
            logger.debug(result)
            serializer = BabySerializer(result)
            return Response(serializer.data)
        else:
            raise Http404


class AllBabiesDetail(APIView):
    @staticmethod
    def get_object():
        try:
            return Baby.objects.all()
        except Exception as e:
            logger.error(e)
            raise Http404

    def get(self, request, format=None):
        result = self.get_object()
        if not result:
            raise Http404
        logger.debug(result)
        serializer = BabySerializer(result, many=True)
        return Response(serializer.data)


class ConfirmedBabiesDetail(APIView):
    @staticmethod
    def get_object():
        try:
            return Baby.objects.filter(is_confirmed=True)
        except Exception as e:
            logger.error(e)
            raise Http404

    def get(self, request, format=None):
        result = self.get_object()
        if not result:
            raise Http404
        logger.debug(result)
        serializer = BabySerializer(result, many=True)
        return Response(serializer.data)