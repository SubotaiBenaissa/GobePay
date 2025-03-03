import stripe
import os
from dotenv import load_dotenv
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from wallet.models import Wallet
from user.models import User
from history.models import History

# Create your views here.
load_dotenv()
stripe.api_key = os.environ['STRIPE_KEY']

class RechargeView(APIView):
    
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        
        totalAmout = int(float(request.data['amount'])*100)   # Se multiplica por 100 por los decimales
        print(request.data['token'])
        print(request.data['amount'])
        print(totalAmout)
        # stripe.Charge.create(
        #     source = request.data['token'],
        #     amount = totalAmout,
        #     currency = "usd"
        # )
    
        wallet = Wallet.objects.get(pk=request.user.wallet_id)
        wallet.balance = float(wallet.balance) + float(request.data['amount'])
        wallet.save()
        
        history = History(
            type="recharge",
            origin_user=self.request.user,
            target_user=self.request.user,
            amount=request.data['amount']
        )
        
        history.save()
        
        return Response('OK', status=status.HTTP_200_OK)
    
class SendMoneyView(APIView):
    
    permission_classes = [IsAuthenticated]
    
    def post(self, request):
        
        wallet = Wallet.objects.get(pk=request.user.wallet_id)
        wallet.balance = float(wallet.balance) - float(request.data['amount'])
        wallet.save()
        
        user_dest = User.objects.get(pk=request.data['userID'])
        wallet_dest = Wallet.objects.get(pk=user_dest.wallet_id)
        wallet_dest.balance = float(wallet_dest.balance) + float(request.data['amount'])
        wallet_dest.save()
        
        history = History(
            type="send_money",
            origin_user=self.request.user,
            target_user=user_dest,
            amount=request.data['amount'],
            message=request.data['message']
        )
        
        history.save()
        
        return Response('OK', status=status.HTTP_200_OK)