import stripe
import os
from dotenv import load_dotenv
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from wallet.models import Wallet

# Create your views here.
load_dotenv()
stripe.api_key = os.environ['STRIPE_KEY']

class RechargeView(APIView):
    
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        
        totalAmout = int(float(request.data['amount'])*100)
        stripe.Charge.create(
            source = request.data['token'],
            amount = totalAmout,
            currency = "usd"
        )
    
        wallet = Wallet.objects.get(pk=request.user.wallet_id)
        wallet.balance = float(wallet.balance) + float(request.data['amount'])
        
        return Response('OK', status=status.HTTP_200_OK)