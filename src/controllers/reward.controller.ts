import RewardSchema from '../models/reward.model';

export async function createReward (req, res) {
  const reward = await new RewardSchema(req.body);
  reward
  .save()
  .then((reward) => res.status(201).json({ success: true, message: 'Reward created successfully', data: reward }))
  .catch((err) => res.status(400).json({ success: false, message: 'Error to create reward: ' + err.message }));
}

export async function getAllRewards(req, res) {
  await RewardSchema
    .find()
    .then((rewards) =>  {
      if(rewards.length > 0) { 
        res.status(200).json({ success: true, message: 'Get all rewards successfully', data: rewards })
      } else {
        res.status(404).json({ success: false, message: 'No rewards found'});
      }
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No rewards found: ' + err.message }));
}


export async function getRewardById(req, res) {
  const { id } = req.params;
  await RewardSchema
    .findById(id)
    .then((reward) => { 
        res.status(200).json({ success: true, message: 'Get reward by id successfully', data: reward })
    }
    )
    .catch((err) => res.status(404).json({ success: false, message: 'No reward found:' + err.message }));
}

export async function updateRewardById(req, res) {
  const { id } = req.params;
  const { name, description, points, expiration_date } = req.body;
  await RewardSchema
    .findOneAndUpdate({ _id: id }, {
      $set: { name, description, points, expiration_date }
    })
    .then((rewardUpdated) => {
      if (rewardUpdated) {
        RewardSchema
          .findById(id)
          .then((reward) => res.status(201).json({ success: true, message: 'reward updated successfully', data: reward }))
          .catch((err) => res.status(404).json({ success: false, message: 'No reward found: ' + err.message }));
      } else {
        res.status(404).json({ success: false, message: 'No reward found' });
      }
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to update reward: ' + err.message }));
}

export async function deleteRewardById(req, res) {
  const { id } = req.params;
  await RewardSchema
    .findOneAndDelete({ _id: id })
    .then((reward) => {
      reward ? res.status(201).json({ success: true, message: 'Reward deleted successfully', data: reward }) : res.status(404).json({ success: false, message: 'No reward found' });
    })
    .catch((err) => res.status(400).json({ success: false, message: 'Error to delete reward: ' + err.message }));
}