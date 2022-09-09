from django.http import Http404, HttpResponseServerError
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import BabySerializer

from loguru import logger


"""class BabyDetail(APIView):
    @staticmethod
    def get_object(baby_id):
        """