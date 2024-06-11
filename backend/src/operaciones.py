from flask import request, jsonify
from bson import ObjectId
from .app import app, db

@app.route('/get_user_role', methods=['GET'])
def get_user_role():
    user_id = request.args.get('user_id')
    if not user_id:
        return jsonify({'error': 'User ID is required'}), 400

    user = db.users.find_one({'_id': ObjectId(user_id)})
    if user:
        return jsonify({'role': user.get('rol')}), 200
    else:
        return jsonify({'error': 'User not found'}), 404
