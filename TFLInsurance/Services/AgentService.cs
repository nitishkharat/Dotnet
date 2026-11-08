using TFLInsurance.DTOs.Request;
using TFLInsurance.DTOs.Response;
using TFLInsurance.Interfaces;
using TFLInsurance.Models;

namespace TFLInsurance.Services
{
    public class AgentsService : IAgentsService
    {
        private readonly IAgentsRepository _repository;

        public AgentsService(IAgentsRepository repository)
        {
            _repository = repository;
        }

        // Get all agents
        public async Task<List<AgentResponse>> GetAllAgents()
        {
            var agents = await _repository.GetAllAgents();

            return agents.Select(agent => new AgentResponse
            {
                agent_id = agent.agent_id,
                user_id = agent.user_id,
                agent_code = agent.agent_code,
                license_number = agent.license_number,
                joining_date = agent.joining_date,
                status = agent.status,
                created_at = agent.created_at
            }).ToList();
        }

        // Get agent by ID
        public async Task<AgentResponse?> GetAgentById(long agent_id)
        {
            var agent = await _repository.GetAgentById(agent_id);

            if (agent == null)
                return null;

            return new AgentResponse
            {
                agent_id = agent.agent_id,
                user_id = agent.user_id,
                agent_code = agent.agent_code,
                license_number = agent.license_number,
                joining_date = agent.joining_date,
                status = agent.status,
                created_at = agent.created_at
            };
        }

        // Add agent
        public async Task<long> AddAgent(CreateAgentRequest request)
        {
            CreateAgentRequest agent = new CreateAgentRequest
            {
                user_id = request.user_id,
                agent_code = request.agent_code,
                license_number = request.license_number,
                joining_date = request.joining_date
            };

            return await _repository.AddAgent(agent);
        }

        // Update agent
        public async Task<bool> UpdateAgent(long agent_id, UpdateAgentRequest request)
        {
            var agent = await _repository.GetAgentById(agent_id);

            if (agent == null)
                return false;

            agent.agent_code = request.agent_code;
            agent.license_number = request.license_number;
            agent.joining_date = request.joining_date;
            agent.status = request.status;

            return await _repository.UpdateAgent(agent);
        }

        // Delete agent
        public async Task<bool> DeleteAgent(long agent_id)
        {
            return await _repository.DeleteAgent(agent_id);
        }
    }
}