from django.contrib import admin
from history.models import History

# Register your models here.
@admin.register(History)
class HistoryAdmin(admin.ModelAdmin):
    
    list_display = ['type', 'origin_user', 'target_user', 'amount', 'created_at']
    fieldsets = (
        ('Información básica', {
            'fields': ['type', 'amount', 'origin_user', 'target_user', 'message', 'created_at']
        }),
    )
    readonly_fields = ['created_at']