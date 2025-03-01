from django.urls import path
from wallet.views import RechargeView, SendMoneyView

urlpatterns = [
    path('wallet/recharge/', RechargeView.as_view()),
    path('wallet/send/', SendMoneyView.as_view())
]